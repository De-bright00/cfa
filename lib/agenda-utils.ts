import { Session } from "@/data/agenda";

export type SessionStatus = "Upcoming" | "Live now" | "Up next" | "✓ Done";

/**
 * Computes the status pill for a session based on Africa/Lagos time (UTC+1).
 * "Before 31 October 2026 every session is Upcoming; after it, every session is Done."
 */
export function getSessionStatus(
  session: Session,
  allSessions: Session[],
  currentDate = new Date()
): SessionStatus {
  // Extract date and time in Africa/Lagos (UTC+1)
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Lagos",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(currentDate);
  const getPart = (type: string) => parts.find((p) => p.type === type)?.value || "0";

  const lagosYear = parseInt(getPart("year"), 10);
  const lagosMonth = parseInt(getPart("month"), 10);
  const lagosDay = parseInt(getPart("day"), 10);
  const lagosHour = parseInt(getPart("hour"), 10);
  const lagosMinute = parseInt(getPart("minute"), 10);

  const dateString = `${lagosYear}-${String(lagosMonth).padStart(2, "0")}-${String(lagosDay).padStart(2, "0")}`;
  const cfaDate = "2026-10-31";

  // Before 31 October 2026, every session is Upcoming
  if (dateString < cfaDate) {
    return "Upcoming";
  }

  // After 31 October 2026, every session is Done
  if (dateString > cfaDate) {
    return "✓ Done";
  }

  // On 31 October 2026
  const currentMinutes = lagosHour * 60 + lagosMinute;

  const [startH, startM] = session.start.split(":").map(Number);
  const [endH, endM] = session.end.split(":").map(Number);

  const startMinutes = startH * 60 + startM;
  const endMinutes = endH * 60 + endM;

  if (currentMinutes >= endMinutes) {
    return "✓ Done";
  }

  if (currentMinutes >= startMinutes && currentMinutes < endMinutes) {
    return "Live now";
  }

  // Session has not started yet (currentMinutes < startMinutes)
  // Check if this session is "Up next" (the single next session slot)
  const futureSessions = allSessions.filter((s) => {
    const [h, m] = s.start.split(":").map(Number);
    return h * 60 + m > currentMinutes;
  });

  if (futureSessions.length > 0) {
    const nextStartMinutes = Math.min(
      ...futureSessions.map((s) => {
        const [h, m] = s.start.split(":").map(Number);
        return h * 60 + m;
      })
    );

    if (startMinutes === nextStartMinutes) {
      return "Up next";
    }
  }

  return "Upcoming";
}

/**
 * Converts Africa/Lagos (UTC+1) HH:MM to UTC iCalendar format YYYYMMDDTHHMMSSZ for 2026-10-31
 */
function toUtcIcsTime(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  // Lagos is UTC+1. Subtract 1 hour to get UTC.
  let utcH = h - 1;
  let utcD = 31;
  if (utcH < 0) {
    utcH += 24;
    utcD -= 1;
  }
  return `202610${String(utcD).padStart(2, "0")}T${String(utcH).padStart(2, "0")}${String(m).padStart(2, "0")}00Z`;
}

/**
 * Generates an iCalendar (.ics) string for a single session
 */
export function generateSessionIcs(session: Session): string {
  const startUtc = toUtcIcsTime(session.start);
  const endUtc = toUtcIcsTime(session.end);
  const nowUtc = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const peopleList = session.people
    .map((p) => `${p.role ? p.role + ": " : ""}${p.name}`)
    .join(", ");
  const description = `${session.notes}${peopleList ? `\\n\\nSpeakers/Facilitators: ${peopleList}` : ""}`;

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Liberalist Centre//CFA 2026//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:cfa-2026-${session.id}@thecfa.liberalistcentre.org`,
    `DTSTAMP:${nowUtc}`,
    `DTSTART:${startUtc}`,
    `DTEND:${endUtc}`,
    `SUMMARY:${session.title.replace(/\n/g, " ")} | CFA 2026`,
    `DESCRIPTION:${description.replace(/\n/g, "\\n")}`,
    "LOCATION:Venue to be announced, Abuja, Nigeria",
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

/**
 * Generates an iCalendar (.ics) string for the full CFA 2026 day
 */
export function generateFullDayIcs(): string {
  const startUtc = toUtcIcsTime("08:30"); // 07:30 UTC
  const endUtc = toUtcIcsTime("16:30"); // 15:30 UTC
  const nowUtc = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Liberalist Centre//CFA 2026//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:cfa-2026-full-day@thecfa.liberalistcentre.org",
    `DTSTAMP:${nowUtc}`,
    `DTSTART:${startUtc}`,
    `DTEND:${endUtc}`,
    "SUMMARY:CFA 2026 — ADVANCE: From Ideas to Action (Full Conference)",
    "DESCRIPTION:Conference of Freedom Advocates (CFA) 2026\\nTheme: ADVANCE: From Ideas to Action\\nOrganised by the Liberalist Centre.\\n\\nSaturday, 31 October 2026\\n08:30 - 16:30 WAT",
    "LOCATION:Venue to be announced, Abuja, Nigeria",
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

/**
 * Triggers client-side download of an .ics file
 */
export function downloadIcsFile(filename: string, content: string) {
  if (typeof window === "undefined") return;
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

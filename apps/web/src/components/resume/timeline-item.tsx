import React from "react";
import MarkdownRenderer from "@/components/markdown/markdown-renderer";

import "@/styles/resume/timeline-item.css";

export interface TimelineItemProps {
  company: string;
  location: string;
  role: string;
  duration: string;
  tasksMarkdown: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  company,
  location,
  role,
  duration,
  tasksMarkdown,
}) => (
  <li className="timeline-item">
    <h4 className="h4 timeline-item-title">
      {company}
      <span>📍 {location}</span>
    </h4>
    <p className="profession-experience-title">
      {role}
      <span className="profession-experience-duration">🗓️ {duration}</span>
    </p>
    <br />
    <div className="timeline-text">
      <MarkdownRenderer content={tasksMarkdown} />
    </div>
  </li>
);

export default TimelineItem;

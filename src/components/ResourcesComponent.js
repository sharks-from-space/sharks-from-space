import "./ResourcesComponent.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function ResourcesComponent({ references = [], showGithub = true, contacts = [] }) {
	return (
		<div className="resources-container">
			<h2 className="resources-title">References</h2>

			{references.length > 0 && (
				<div className="references-list">
					{references.map((ref, index) => (
						<div
							key={`ref-${index}-${ref.title?.slice(0, 10) || ref.text?.slice(0, 10)}`}
							className="reference-item"
						>
							<span className="reference-number">{index + 1}.</span>
							<div className="reference-content">
								{ref.url ? (
									<a
										href={ref.url}
										target="_blank"
										rel="noopener noreferrer"
										className="reference-link"
									>
										{ref.title || ref.text}
									</a>
								) : (
									<span className="reference-text">
										{ref.title || ref.text}
									</span>
								)}
								{ref.description && (
									<span className="reference-description">
										{" "}
										- {ref.description}
									</span>
								)}
							</div>
						</div>
					))}
				</div>
			)}

			{showGithub && (
				<>
					<h3 className="institution-title">Website Source Code</h3>
					<div className="resource-item github-resource">
						<FaGithub className="github-icon" />

						<div className="github-details">
							<span className="github-title">GitHub Repository</span>
							<a
								href="https://github.com/sharks-from-space/sharks-from-space"
								target="_blank"
								rel="noopener noreferrer"
								className="github-link"
							>
								sharks-from-space
							</a>
						</div>
					</div>
				</>
			)}

			{contacts.length > 0 && (
				<>
					<h3 className="institution-title">Contact</h3>
					<div className="contacts-list">
						{contacts.map((contact, index) => (
							<div
								key={`contact-${index}-${contact.name?.slice(0, 10)}`}
								className="contact-item"
							>
								<FaLinkedin className="linkedin-icon" />
								<div className="contact-details">
									<span className="contact-name">{contact.name}</span>
									{contact.title && (
										<span className="contact-title">{contact.title}</span>
									)}
									<a
										href={contact.linkedin}
										target="_blank"
										rel="noopener noreferrer"
										className="linkedin-link"
									>
										View LinkedIn Profile
									</a>
								</div>
							</div>
						))}
					</div>
				</>
			)}
					</div>
	);
}

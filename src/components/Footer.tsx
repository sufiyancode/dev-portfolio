import { personalInfo } from '@/data/content';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border py-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="code-style text-sm text-muted-foreground">
                    © {currentYear} {personalInfo.name}. All rights reserved.
                </div>
                <div className="flex gap-6">
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-amber-500 transition-colors"
                        aria-label="GitHub"
                    >
                        GitHub
                    </a>
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-amber-500 transition-colors"
                        aria-label="LinkedIn"
                    >
                        LinkedIn
                    </a>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-muted-foreground hover:text-amber-500 transition-colors"
                        aria-label="Email"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}

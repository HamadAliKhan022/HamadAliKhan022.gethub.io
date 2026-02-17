import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-muted py-8 px-4 border-t">
            <div className="max-width mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                    Created By <span className="text-foreground font-semibold">Hamad Ali Khan</span> | © 2024 All rights reserved.
                </p>
                <div className="flex items-center gap-6 text-sm font-medium">
                    <Link href="https://github.com/HamadAliKhan022" target="_blank" className="hover:text-primary transition-colors">
                        GitHub
                    </Link>
                    <Link href="https://www.linkedin.com/in/hamad-alikhan/" target="_blank" className="hover:text-primary transition-colors">
                        LinkedIn
                    </Link>
                    <Link href="https://www.upwork.com/freelancers/~01afdcdae5deaf17b0" target="_blank" className="hover:text-primary transition-colors">
                        Upwork
                    </Link>
                </div>
            </div>
        </footer>
    );
}

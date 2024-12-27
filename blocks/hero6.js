'use client'

import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

export default function Hero6() {
    const [showKeyboardPrompt, setShowKeyboardPrompt] = useState(true)

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key.toLowerCase() === 's') {
                // Handle the 'S' key press - you can add your logic here
                console.log('S key pressed')
            }
        }

        document.addEventListener('keydown', handleKeyPress)
        return () => document.removeEventListener('keydown', handleKeyPress)
    }, [])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
            <div className="w-full max-w-6xl mx-auto text-center space-y-8">
                {/* New Release Badge */}
                <div className="flex justify-center">
                    <Badge variant="secondary" className="text-sm font-medium">
                        New Release ↘
                    </Badge>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                    This is a heading for your new project
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.
                </p>

                {showKeyboardPrompt && (
                    <div className="text-muted-foreground">
                        Press <kbd className="px-2 py-1 text-xs font-semibold text-muted-foreground bg-muted rounded">S</kbd> to get started
                    </div>
                )}

                {/* Bottom Section */}
                <div className="pt-24 space-y-6">
                    <p className="text-muted-foreground">
                        Powering the next generation of digital products
                    </p>

                    {/* Logo Grid */}
                    <div className="flex flex-wrap justify-center items-center gap-8 px-6">
                        <div className="flex items-center space-x-2">
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L1 21h22L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="font-semibold">shadcn/ui</span>
                        </div>

                        <div className="flex items-center">
                            <svg className="h-5 w-5" viewBox="0 0 76 65" fill="none">
                                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor" />
                            </svg>
                            <span className="font-semibold ml-2">Vercel</span>
                        </div>

                        <div className="flex items-center">
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 14.88l-8.36 8.36a12 12 0 0116.72 0L12 14.88z M20.36 9.36l-8.36 8.36-8.36-8.36a12 12 0 0116.72 0z" />
                            </svg>
                            <span className="font-semibold ml-2">React</span>
                        </div>

                        <div className="flex items-center">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M21.92 11.6C19.9 6.91 16.1 4 12 4s-7.9 2.91-9.92 7.6a1 1 0 000 .8C4.1 17.09 7.9 20 12 20s7.9-2.91 9.92-7.6a1 1 0 000-.8z" />
                            </svg>
                            <span className="font-semibold ml-2">Supabase</span>
                        </div>

                        <div className="flex items-center">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                            </svg>
                            <span className="font-semibold ml-2">TailwindCSS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


import Link from "next/link"
import { Github, Linkedin, Mail, FileText, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center justify-center">
          <div className="flex items-center gap-8">
            <div className="font-bold">
              <Link href="/">JD</Link>
            </div>
            <nav className="flex gap-6">
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                Work
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:your.email@example.com">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-12 md:py-24">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-8 items-center mb-24">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Hi, I'm <span className="text-primary">John Doe</span>
            </h1>
            <p className="text-xl text-muted-foreground">Computer Science & Finance Student</p>
            <p className="text-muted-foreground max-w-[600px]">
              I'm passionate about building software solutions for financial problems. Currently studying Computer
              Science and Finance, with experience in full-stack development and financial analysis.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/resume.pdf" target="_blank">
                  <FileText className="mr-2 h-4 w-4" /> Resume
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Avatar className="h-48 w-48 border-4 border-background shadow-xl">
              <AvatarImage src="/placeholder.svg?height=192&width=192" alt="Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-24 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p>
                I'm a final-year student pursuing a dual degree in Computer Science and Finance. My academic journey has
                equipped me with a unique blend of technical programming skills and financial knowledge.
              </p>
              <p>
                I'm particularly interested in fintech, algorithmic trading, and building scalable web applications. My
                goal is to leverage technology to solve complex financial problems and create innovative solutions.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>Node.js</Badge>
                <Badge>Python</Badge>
                <Badge>SQL</Badge>
                <Badge>Financial Analysis</Badge>
                <Badge>Data Structures</Badge>
                <Badge>Algorithms</Badge>
                <Badge>Machine Learning</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-24 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Software Engineering Intern</CardTitle>
                    <CardDescription>Financial Tech Company</CardDescription>
                  </div>
                  <Badge>Summer 2023</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Developed and maintained features for a financial dashboard using React and TypeScript</li>
                  <li>Implemented RESTful APIs using Node.js and Express</li>
                  <li>
                    Collaborated with the data science team to integrate financial models into the web application
                  </li>
                  <li>Participated in code reviews and agile development processes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Financial Analyst Intern</CardTitle>
                    <CardDescription>Investment Bank</CardDescription>
                  </div>
                  <Badge>Summer 2022</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Assisted in financial modeling and valuation of companies in the technology sector</li>
                  <li>Conducted market research and competitive analysis</li>
                  <li>Created data visualizations and reports for client presentations</li>
                  <li>Automated data collection processes using Python scripts</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Research Assistant</CardTitle>
                    <CardDescription>University Finance Department</CardDescription>
                  </div>
                  <Badge>2021-2022</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Assisted professors with research on algorithmic trading strategies</li>
                  <li>Collected and analyzed financial data using Python and R</li>
                  <li>Contributed to academic papers on market efficiency</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">Personal Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Stock Portfolio Analyzer</CardTitle>
                <CardDescription>Full-stack web application</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  A web application that helps users analyze their stock portfolios, track performance, and get insights
                  based on financial metrics.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">Financial APIs</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="https://github.com/yourusername/stock-portfolio-analyzer" target="_blank">
                    <Github className="mr-2 h-4 w-4" /> View Project
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Algorithmic Trading Bot</CardTitle>
                <CardDescription>Python application</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  A Python-based trading bot that implements various trading strategies and backtests them against
                  historical market data.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Pandas</Badge>
                  <Badge variant="outline">NumPy</Badge>
                  <Badge variant="outline">Machine Learning</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="https://github.com/yourusername/algo-trading-bot" target="_blank">
                    <Github className="mr-2 h-4 w-4" /> View Project
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Personal Finance Dashboard</CardTitle>
                <CardDescription>Web application</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  A dashboard for tracking personal finances, including expenses, income, investments, and financial
                  goals.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Prisma</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="https://github.com/yourusername/finance-dashboard" target="_blank">
                    <Github className="mr-2 h-4 w-4" /> View Project
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <Link href="mailto:your.email@example.com" className="hover:underline">
                    your.email@example.com
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <Link href="https://linkedin.com/in/yourusername" target="_blank" className="hover:underline">
                    linkedin.com/in/yourusername
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-muted-foreground" />
                  <Link href="https://github.com/yourusername" target="_blank" className="hover:underline">
                    github.com/yourusername
                  </Link>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">I'm currently looking for:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ExternalLink className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Internship opportunities in software development or fintech</span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Collaboration on open-source projects related to finance</span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Networking with professionals in the tech and finance industries</span>
                </li>
              </ul>
              <div className="pt-4">
                <Button asChild>
                  <Link href="mailto:your.email@example.com">
                    <Mail className="mr-2 h-4 w-4" /> Send me an email
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:your.email@example.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

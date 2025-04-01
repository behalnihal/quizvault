import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <header className="text-center p-4">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to QuizVault</h1>
        <p className="text-lg mb-6">
          Your ultimate platform to create, share, and take quizzes. Enhance
          your learning experience today!
        </p>
      </header>

      <Button>Get Started</Button>

      {/* Features Section */}
      <div className="w-full max-w-4xl mt-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose QuizVault?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="font-bold text-center text-2xl">
              Create Quizzes
            </CardHeader>
            <CardContent className="text-center">
              Easily design custom quizzes for any topic or audience.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="font-bold text-center text-2xl">
              Share with Friends
            </CardHeader>
            <CardContent className="text-center">
              Share your quizzes and challenge your friends to take them.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="font-bold text-center text-2xl">
              Track Progress
            </CardHeader>
            <CardContent className="text-center">
              Monitor your learning progress with detailed analytics.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

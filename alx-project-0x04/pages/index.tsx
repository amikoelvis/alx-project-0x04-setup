import Button from "@/components/common/Button";
import { PageRouteProps } from "@/interface";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  // Imeperative routing with useRouter
  const routeToNextPage  = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false})
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center">
      {/* Welcome Message */}
      <h1> Welcome to Splash App </h1>
      <p className="text-lg text-gray-600 mb-8">
        Your one-stop platform for everything AI you need. Start exploring by
        navigating to our features below.
      </p>

      {/* Navigation Options */}
      <div className="flex gap-6">
        <Button action={() => routeToNextPage({ pageRoute: '/generate-text-ai' })} buttonLabel="Generate Text" buttonBackgroundColor="blue" />
        <Button action={() => routeToNextPage({ pageRoute: '/text-to-image'})} buttonLabel="Text to Image" buttonBackgroundColor="green" />
        <Button action={() => routeToNextPage({ pageRoute: '/counter-app'})} buttonLabel="Contact us" buttonBackgroundColor="orange" />
      </div>
    </div>
  );
}

import { useState } from "react";

const CounterApp: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count > 0 ? count - 1 : 0);
    }
    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-pink-500 flex flex-col justify-center items-center text-white">
            {/* Title */}
            <h1 className="text-6xl font-extrabold mb-6">🤖 Fun Counter App 🎉</h1>

            {/* Funny message */}
            <p className="text-lg font-medium mb-4">
                Current count: {count} {count === 0 ? "🙈 No clicks yet!" : count % 10 === 0 && count !== 0 ? "🔥 You're on fire!" : ""}
            </p>

            {/* Counter Display */}
            <div className="text-6xl font-bold mb-8">
                {count}
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
                <button 
                onClick={increment}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"
                >
                    Increment 🚀
                </button>
                <button
                onClick={decrement}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"
                >
                    Decrement 👎
                </button>
            </div>

            {/* Footer message */}
            <p className="mt-8 text-sm text-white opacity-75">
                Keep clicking, who knows what happens at 100? 😏
            </p>
        </div>
    )
}

export default CounterApp;
import { useState } from "react";
import { Bot, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HomeChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your Khetify AI Advisor. How can I help you today?",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");

  const predefinedResponses = {
    weather:
      "For weather updates, I recommend checking local weather forecasts. In general, ensure your crops are protected during extreme weather conditions.",
    crops:
      "Popular crops vary by region. For North India, wheat, rice, and sugarcane are common. What's your location?",
    seeds:
      "We partner with Verma Seeds for quality seed supply. Contact us at 9286158428 for seed purchases.",
    help: "I can assist with farming advice, crop recommendations, weather guidance, and connecting you with our services.",
    contact:
      "You can reach us at agrilinkofficial04@gmail.com or call 9286158428 for immediate assistance.",
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    const lowercaseInput = input.toLowerCase();

    let botResponse =
      "I understand you're asking about farming. For specific advice, please contact our experts at agrilinkofficial04@gmail.com or call 9286158428.";

    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowercaseInput.includes(key)) {
        botResponse = response;
        break;
      }
    }

    setMessages([...messages, userMessage, { text: botResponse, isBot: true }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg"
        >
          <Bot className="h-6 w-6" />
        </Button>
      ) : (
        <Card className="w-80 h-96 bg-white shadow-xl">
          <CardHeader className="bg-green-600 text-white p-4 rounded-t-lg">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg flex items-center">
                <Bot className="h-5 w-5 mr-2" />
                Khetify AI Advisor
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-green-700"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-72">
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.isBot ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg text-sm ${
                      message.isBot
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about farming..."
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                />
                <Button
                  onClick={handleSend}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default HomeChatBot;


import { useState } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your Khetify Farm Advisory assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const farmAdvisoryData = {
    "crop rotation": "Crop rotation helps improve soil health. For sustainable farming, rotate between legumes, cereals, and cash crops. Example: Rice → Wheat → Legumes.",
    "soil testing": "Soil testing should be done every 2-3 years. Test for pH, organic matter, nitrogen, phosphorus, and potassium levels to optimize fertilizer use.",
    "irrigation": "Efficient irrigation methods include drip irrigation and sprinkler systems. Water early morning or evening to reduce evaporation losses.",
    "pest control": "Integrated Pest Management (IPM) combines biological, cultural, and chemical controls. Use neem-based pesticides and introduce beneficial insects.",
    "fertilizer": "Use balanced NPK fertilizers based on soil test results. Organic options include compost, vermicompost, and bio-fertilizers.",
    "weather": "Monitor weather forecasts regularly. Plant during optimal seasons and protect crops during extreme weather conditions.",
    "seeds": "Use certified seeds from reliable sources like Verma Seeds (our partner). Choose varieties suitable for your local climate and soil conditions.",
    "harvesting": "Harvest at the right maturity stage. For grains, moisture content should be 20-25%. Use proper storage to prevent post-harvest losses.",
    "organic farming": "Organic farming avoids synthetic chemicals. Use compost, green manure, and biological pest control methods for sustainable production.",
    "greenhouse": "Greenhouse farming allows controlled environment agriculture. Ideal for high-value crops like tomatoes, cucumbers, and flowers.",
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Simple keyword matching for responses
    let botResponse = "I'm sorry, I don't have specific information about that. Please contact our experts at agrilink04@gmail.com for detailed guidance.";
    
    const lowerInput = inputValue.toLowerCase();
    for (const [keyword, response] of Object.entries(farmAdvisoryData)) {
      if (lowerInput.includes(keyword)) {
        botResponse = response;
        break;
      }
    }

    const botMessage: Message = {
      id: messages.length + 2,
      text: botResponse,
      isBot: true,
      timestamp: new Date(),
    };

    setTimeout(() => {
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputValue("");
  };

  const quickQuestions = [
    "How to do soil testing?",
    "Best irrigation methods?",
    "Organic pest control tips?",
    "Crop rotation benefits?",
  ];

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 bg-green-600 hover:bg-green-700 shadow-lg"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96">
          <Card className="bg-white shadow-2xl border-green-200">
            <CardHeader className="bg-green-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center">
                <Bot className="h-5 w-5 mr-2" />
                Farm Advisory Bot
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg ${
                        message.isBot
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-500 text-white'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.isBot ? (
                          <Bot className="h-4 w-4 mt-1 flex-shrink-0" />
                        ) : (
                          <User className="h-4 w-4 mt-1 flex-shrink-0" />
                        )}
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Questions */}
              <div className="p-4 border-t bg-gray-50">
                <p className="text-sm text-gray-600 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setInputValue(question)}
                      className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about farming..."
                    className="flex-1"
                  />
                  <Button onClick={handleSend} size="sm" className="bg-green-600 hover:bg-green-700">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatBot;

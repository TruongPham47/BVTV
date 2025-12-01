import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const generateMarketingSlogan = async (productName: string, description: string): Promise<string> => {
  if (!apiKey) {
    throw new Error("Vui lòng kiểm tra API Key.");
  }

  try {
    const prompt = `
      Bạn là một chuyên gia kỹ sư nông nghiệp và bác sĩ cây trồng giàu kinh nghiệm.
      Người dùng đang gặp vấn đề với cây trồng của họ.
      
      Loại cây/Vấn đề: ${productName}
      Mô tả chi tiết triệu chứng: ${description}
      
      Hãy đưa ra lời khuyên ngắn gọn (dưới 100 từ) về nguyên nhân có thể và đề xuất giải pháp xử lý (ví dụ: dùng loại thuốc nào, hoạt chất gì, hoặc biện pháp canh tác). 
      Giọng văn thân thiện, chuyên môn, giúp ích cho nhà nông.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Hệ thống đang bận, vui lòng thử lại sau.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Không thể kết nối với chuyên gia AI.");
  }
};
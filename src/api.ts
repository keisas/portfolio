export async function askYoneyamaGPT(question: string): Promise<string> {
    const response = await fetch("http://localhost:8000/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });
  
    if (!response.ok) {
      throw new Error("APIリクエストに失敗しました");
    }
  
    const data = await response.json();
    return data.answer; // APIの戻り値の "answer" を抽出
  }
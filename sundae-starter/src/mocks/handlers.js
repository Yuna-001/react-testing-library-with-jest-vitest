import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:3030/scoops", () => {
    // Note that you DON'T have to stringify the JSON!
    return HttpResponse.json([
      { name: "Chocolate", imagePath: "/image/chocolate.png" },
      { name: "Vanilla", imagePath: "./image/vanillat.png" },
    ]);
  }),
  http.get("http://localhost:3030/toppings", () => {
    return HttpResponse.json([
      { name: "Cherries", imagePath: "image/cherries.png" },
      { name: "M&Ms", imagePath: "image/m-and-ms.png" },
      { name: "Hot fudge", imagePath: "image/hot-fudge.png" },
    ]);
  }),
];

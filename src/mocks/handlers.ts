import { http, HttpResponse } from "msw";
import todos from "./data/todos.json";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get("/api/todos", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(todos);
  }),
];

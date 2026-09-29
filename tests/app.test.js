const helloWorld = require("../src/app");

test("deve retornar mensagem CI/CD", () => {
    expect(helloWorld()).toBe("Olá, CI/CD!");
});
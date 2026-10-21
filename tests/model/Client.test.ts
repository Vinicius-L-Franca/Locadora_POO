import Client from "../../src/model/Client";

describe("Client", () => {
  it("deve armazenar nome e contato", () => {
    const client = new Client("João", "joao@email.com");
    expect(client.getName()).toBe("João");
    expect(client.getContact()).toBe("joao@email.com");
  });

  it("contato deve ser opcional", () => {
    const client = new Client("Maria");
    expect(client.getName()).toBe("Maria");
    expect(client.getContact()).toBe("");
  });

  it("toString() deve retornar apenas o nome por padrão", () => {
    const client = new Client("João", "joao@email.com");
    expect(client.toString()).toBe("João");
  });

  it("toString(true) deve retornar nome e contato", () => {
    const client = new Client("João", "joao@email.com");
    expect(client.toString(true)).toBe("João - joao@email.com");
  });
});

import Client from "../../src/model/Client";

describe("Client", () => {
  it("deve armazenar nome e contato", () => {
    const client = new Client("João", "joao@email.com");
    expect(client.getName()).toBe("João");
    expect(client.getContact()).toBe("joao@email.com");
  });

  it("usa o nome quando o contato não é informado", () => {
    const client = new Client("Maria");
    expect(client.getName()).toBe("Maria");
    expect(client.getContact()).toBe("");
    expect(client.toString()).toBe("Maria");
  });

  it("toString(true) deve incluir o contato", () => {
    const client = new Client("João", "joao@email.com");
    expect(client.toString(true)).toBe("João - joao@email.com");
  });
});

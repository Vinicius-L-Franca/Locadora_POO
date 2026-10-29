import DescriptionService from "../../src/services/DescriptionService";

describe("DescriptionService", () => {
  it("deve retornar uma descrição por classe", () => {
    const descriptions = new DescriptionService().listDescriptions();

    expect(descriptions).toHaveLength(5);
    expect(descriptions).toEqual(
      expect.arrayContaining([
        "Description define o comportamento de descrição das classes.",
        "Movie representa filmes que podem ser vendidos ou alugados.",
        "Game representa jogos que podem ser vendidos ou alugados.",
        "Serie representa séries que podem ser vendidas ou alugadas.",
        "Client representa uma pessoa cadastrada na locadora.",
      ])
    );
  });
});
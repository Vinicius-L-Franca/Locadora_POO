import Database from "./Database";
import Client from "../model/Client";
import Game from "../model/Game";
import Movie from "../model/Movie";
import Serie from "../model/Series";

export function seedDatabase(database: Database): void {
  const movie = new Movie();
  movie.setTitle("Interestelar");
  movie.setSalePrice(60);
  movie.setRentalPrice(10);
  movie.setType("filme");
  movie.setDurationInMinutes("169");

  const game = new Game();
  game.setTitle("Minecraft");
  game.setSalePrice(150);
  game.setRentalPrice(20);
  game.setType("jogo");
  game.setPlatform("PC");

  const serie = new Serie();
  serie.setTitle("Breaking Bad");
  serie.setSalePrice(100);
  serie.setRentalPrice(15);
  serie.setType("serie");
  serie.setEpisodes("62");

  database.addProduct(movie);
  database.addProduct(game);
  database.addProduct(serie);

  database.addClient(new Client("Ana", "1111-1111"));
  database.addClient(new Client("Bruno", "2222-2222"));
  database.addClient(new Client("Carlos", "3333-3333"));
}
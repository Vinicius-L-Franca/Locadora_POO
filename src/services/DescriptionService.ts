import Client from "../model/Client";
import Description from "../model/Description";
import Game from "../model/Game";
import Movie from "../model/Movie";
import Serie from "../model/Series";

export default class DescriptionService {
  listDescriptions(): string[] {
    return [
      Description.describe(),
      Movie.describe(),
      Game.describe(),
      Serie.describe(),
      Client.describe(),
    ];
  }
}
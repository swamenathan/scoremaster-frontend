export interface ITeams {
  id: string;
  team_name: string;
  main_player: number;
  partner_player: number;
  seeding_points: number;
  rr_points: number;
}

export interface IMatch {
  match_uuid: string;
  match_type: string;
  team1_set1: number;
  team2_set1: number;
  team1_set2: number;
  team2_set2: number;
  team1_set3: number;
  team2_set3: number;
  winner: string;
  match_date: string;
  tournament: number;
  team_1: number;
  team_2: number;
}

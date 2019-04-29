export interface ITeams {
  id: string;
  team_name: string;
  main_player: string;
  partner_player: string;
  seeding_points: number;
  rr_points: number;
}

export interface IMatch {
  match_uuid: string;
  match_type: any;
  team1_set1: any;
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
  team_1_name: string;
  team_2_name: string;
}


export interface IMatchType {
  match_key: string;
  match_value: string;
}

export interface IScore {
  match_type: string;
  team1_set1: any;
  team2_set1: any;
  team1_set2: any;
  team2_set2: any;
  team1_set3: any;
  team2_set3: any;
  match_date: string;
  tournament: number;
  team_1: string;
  team_2: string;
}

export interface IChangePassword {
  old_password: string;
  new_password1: string;
  new_password2: string;

}

export interface ITours {
  id: string;
  tour_name: string;
  tour_type: string;
  tour_start_date: string;
  tour_end_date: string;
}

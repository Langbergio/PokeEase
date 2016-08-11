interface IPokemonCapture extends IMapLocation {
    Id: string;
    Attempt: number;
    BallAmount: number;
    Pokeball: number;
    Probability: number;
    Exp: number;
    FamilyCandies: number;
    Stardust: number;
    CatchType: "Normal" | "Snipe";
    Cp: number;
    Level: number;
    MaxCp: number;
    Perfection: number;
    PokemonId: number;
    Status: PokemonCatchStatus;
}
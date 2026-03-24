export enum VersionSelector {
  Warehouse = "Warehouse",
  WarehouseFactory = "WarehouseFactory",
  WarehouseFactoryQuality = "WarehouseFactoryQuality",
  KickTheTires = "KickTheTires",
  NoBranchTracking = "NoBranchTracking",
  Logging = "Logging"
}

export const isValidVersion = (value: unknown): value is VersionSelector => {
    const values = Object.values(VersionSelector).filter(v => typeof v === "string") as string[];
    return typeof value === "string" && values.includes(value)
}
/**
 * Smackover Subsurface Hydraulics, Lithium DLE & Geothermal Enthalpy Core
 * Strict TypeScript interfaces for multiphase flow, thermodynamics, and NIST SP 800-82 invariants.
 */

export interface GeothermalThermodynamics {
  total_mass_flow_kg_s: number;
  delta_t_celsius: number;
  thermal_power_extracted_mw_th: number;
  gross_electric_generation_mw_e: number;
}

export interface LithiumMassBalance {
  elemental_lithium_yield_g_s: number;
  lce_production_kg_hr: number;
  annual_lce_metric_tons: number;
  dle_parasitic_power_draw_mw_e: number;
}

export interface CyberPhysicalSecurityStatus {
  model_expected_whp_bar: number;
  observed_sensor_whp_bar: number;
  residual_error_bar: number;
  nist_sp800_82_status: "INVARIANT_VERIFIED_AUTHENTIC" | "SPOOFING_DETECTED_TRIP_FAILSAFE";
  cyber_physical_interlock: "NORMAL_OPERATION" | "HARDWARE_LOCKOUT";
}

export interface ThesisValidationMatrix {
  thesis_defense_title: string;
  author: string;
  timestamp_utc: string;
  thesis_hypotheses_validated: boolean;
  metrics: {
    net_surplus_electric_power_mw_e: number;
    energy_return_on_investment_eroi: number;
    lifecycle_carbon_delta_kg_co2e_per_kg_lce: number;
    is_net_negative_emissions: boolean;
    annual_lce_metric_tons: number;
  };
  thermodynamics: GeothermalThermodynamics;
  lithium_extraction: LithiumMassBalance;
  cyber_physical_guard: CyberPhysicalSecurityStatus;
}

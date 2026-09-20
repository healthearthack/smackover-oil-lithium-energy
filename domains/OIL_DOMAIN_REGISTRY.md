# 🛢️ Subsurface Petroleum & Wellbore Telemetry Registry (`.oil`)
**Official GitHub Domain Presence for the `.oil` Infrastructure Namespace**
*Part of the healthearthack Doctoral Research & Industrial Publishing Suite*

[![TLD: .oil](https://img.shields.io/badge/Domain%20Namespace-.oil%20Subsurface%20Grid-orange.svg)](domains/)
[![Status: Registered & Active](https://img.shields.io/badge/Status-Cryptographically%20Anchored-brightgreen.svg)](oil_infrastructure_manifest.json)
[![Security: NIST SP 800-82](https://img.shields.io/badge/Security-NIST%20SP%20800--82%20Validated-blue.svg)](../)

---

## 🏛️ Purpose & Operational Architecture
The `.oil` top-level domain namespace serves as the sovereign, cyber-physically secured address space for legacy petroleum wellbores, downhole pressure telemetry, and oil-to-battery energy transition assets across the Upper Jurassic Smackover Formation:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                               .OIL DOMAIN TOPOLOGY GRID                                │
├──────────────────────────────┬──────────────────────────────┬──────────────────────────┤
│ smackover.oil                │ wellbore.oil                 │ telemetry.oil            │
│ Basin-wide geologic data,    │ Individual well re-entry     │ Real-time Modbus/DNP3    │
│ casing records & formations  │ status & mechanical logs     │ pressure stream routing  │
├──────────────────────────────┼──────────────────────────────┼──────────────────────────┤
│ re-entry.oil                 │ reserves.oil                 │ thepolka.oil             │
│ Capex savings calculator vs  │ Hydrocarbon to lithium       │ Direct edge gateway      │
│ greenfield drilling costs    │ depletion & valuation models │ to cloud processing      │
└──────────────────────────────┴──────────────────────────────┴──────────────────────────┘
```

---

## 📡 Live Telemetry Routing Specification

```json
{
  "tld": ".oil",
  "authority": "healthearthack / Metaknews LLC",
  "root_gateway": "https://go.thepolka.cloud/telemetry/oil",
  "registered_zones": [
    {
      "fqdn": "smackover.oil",
      "purpose": "Upper Jurassic Smackover Reservoir Pressure Invariants",
      "target_repository": "healthearthack/smackover-oil-lithium-energy",
      "downhole_depth_m": 3200.0,
      "sensor_protocol": "Modbus TCP / IEEE C37.118"
    },
    {
      "fqdn": "wellbore.oil",
      "purpose": "Depleted Petroleum Wellbore Mechanical Integrity Logs",
      "permit_type": "EPA Class II to Class V Re-entry",
      "capex_savings_usd": 6700000.00
    },
    {
      "fqdn": "thepolka.oil",
      "purpose": "High-Enthalpy Geothermal Enthalpy Transfer Endpoint",
      "thermal_rating_mw_th": 55.28
    }
  ]
}
```

---

## 🔐 Cryptographic Resolution & DNSSEC / Handshake Binding
All `.oil` routing records are signed with Ed25519 cryptographic keys and verified against NIST SP 800-82 Rev. 3 invariant detectors, precluding DNS spoofing or man-in-the-middle attacks on field control valves.

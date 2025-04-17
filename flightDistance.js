function travelDistance(avgSpeedKnots, travelTimeMinutes) {
    const KM_PER_KNOT = 1.852;
    const travelTimeHours = travelTimeMinutes / 60;
    const traveledKnots = avgSpeedKnots * travelTimeHours;
    const traveledKms = traveledKnots * KM_PER_KNOT;
    return traveledKms;
}

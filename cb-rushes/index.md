# What are CB rushes
When you accidentally insert an extra tap, Etterna thinks you meant to hit the upcoming note. This creates an early hit and also offsets all further taps on this column. This creates a stream of bad judgements.

Here's an illustration (oriented downscroll: bottom to top):

<img height=500px src=https://cdn.discordapp.com/attachments/389194939881488385/749534524479897630/cbrush-explanation.png>

# How does the bot detect them
Actually the bot doesn't _detect_ CB rushes per se. Instead, it gathers the raw hit data and runs it through a different hit system than the Stepmania/Etterna one. This new hit system is designed to not be susceptible to CB rushes in the first place.

Default hit system | Modified hit system
--|--
When you tap a key, the nearest note that hasn't been already judged will be used as the tap's associated note | Key taps will be mapped to the notes in a best-match fashion. If you hit a stray tap, but afterwards get a more precise hit on the same note, instead of choosing the upcoming note as the associated note, this hit system will just throw out the old associated hit and count it as a miss.

# Why is the score sometimes lower _without_ CB rushes?
1. Due to the fact that the "no CB rushes" score is created using a whole different hit system, there's bound to be some discrepancies.
2. Etterna's replay file format discards all taps that are not associated to any notes (ghost taps). 
    This is usually fine, **but** in a CB rush, the last tap will not have an associated note - see in the graphic above, the uppermost red dot doesn't have a green line coming from it. This means that in a CB rush, Etterna discards the last hit. That makes for a miss in the bot's modified hit system.
    Due to this fact, a CB rush situation in the modified hit system is sometimes _more punished_ (two misses) than in the default hit system (multiple goods and bads).
 

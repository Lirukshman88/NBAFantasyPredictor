# NBA Fantasy Predictor

This project is intended to help you pick out the players you need for your NBA Fantasy Team. The Web App predicts the Games Played, Points per game, Assists per game and Rebounds per game for each position by using TensorFlow's library functions to perform a linear regression model on the past 3 seasons.

Below is the results after one trial run with 25 NBA players for each Statistical Category.

### Games Played
|Position   |Name        | Games Played (Predicted - Actual) |
| --------- | ---------- | -------------------------- |
| PG        | Kyle Lowry | +8.4                       |
| PG        | Steph Curry | -11.7                       |
| PG        | Kyrie Irving | -0.9                       |
| PG        | Russel Westbrook | +8.7                       |
| PG        | Damian Lillard | -5.6                       |
| SG        | Danny Green | +10.8                       |
| SG        | Demar Derozan | +2.6                      |
| SG        | Klay Thompson | -3.1                      |
| SG        | James Harden | -3.2                       |
| SG        | Jimmy Butler | -0.4                       |
| C        | Jonas Valunciunas | +32.8                       |
| C        | Anthony Davis | +22.3                      |
| C        | Joel Embiid | -6.1                      |
| C        | Marc Gasol | -1.3                       |
| C        | Nikola Jokic | +5.1                       |
| SF        | Kawhi Leonard | +16.0                       |
| SF        | LeBron James | +26.6                      |
| SF       | Kevin Durant | -11.5                      |
| SF       | Giannis Antetokounmpo | +5.2                       |
| SF       | Paul George | +1.7                       |
| PF        | Serge Ibaka | +4.0                       |
| PF        | Pascal Siakam | -2.6                      |
| PF       | Blake Griffin | -11.6                      |
| PF       | LaMarcus Aldridge| -5.6                       |
| PF       | Kevin Love | +25.7                       |

### Points
|Position   |Name        | Points (Predicted - Actual)|
| --------- | ---------- | -------------------------- |
| PG        | Kyle Lowry | +3.6                       |
| PG        | Steph Curry | -1.4                       |
| PG        | Kyrie Irving | +2.0                       |
| PG        | Russel Westbrook | +5.3                       |
| PG        | Damian Lillard | +1.9                       |
| SG        | Danny Green | +1.8                       |
| SG        | Demar Derozan | -3.6                      |
| SG        | Klay Thompson | -1.7                      |
| SG        | James Harden | +5.4                       |
| SG        | Jimmy Butler | +4.6                       |
| C        | Jonas Valunciunas | -2.9                       |
| C        | Anthony Davis | +4.7                      |
| C        | Joel Embiid | -6.1                      |
| C        | Marc Gasol | +4.8                       |
| C        | Nikola Jokic | -0.6                       |
| SF        | Kawhi Leonard | -0.6                       |
| SF        | LeBron James | +0.5                      |
| SF       | Kevin Durant | +0.1                      |
| SF       | Giannis Antetokounmpo | -0.7                       |
| SF       | Paul George | -2.3                       |
| PF        | Serge Ibaka | -1.4                       |
| PF        | Pascal Siakam | -10.1                      |
| PF       | Blake Griffin | -2.7                      |
| PF       | LaMarcus Aldridge| +1.0                       |
| PF       | Kevin Love | +1.6                       |

### Assists
|Position   |Name        | Assists (Predicted - Actual)|
| --------- | ---------- | -------------------------- |
| PG        | Kyle Lowry | -1.6                       |
| PG        | Steph Curry | +1.1                      |
| PG        | Kyrie Irving | -1.4                       |
| PG        | Russel Westbrook | -0.4                       |
| PG        | Damian Lillard | -0.5                       |
| SG        | Danny Green | +0.1                       |
| SG        | Demar Derozan | -1.2                      |
| SG        | Klay Thompson | +0.1                      |
| SG        | James Harden | +2.5                       |
| SG        | Jimmy Butler | +0.4                      |
| C        | Jonas Valunciunas | -0.4                       |
| C        | Anthony Davis | -1.6                      |
| C        | Joel Embiid | -0.5                     |
| C        | Marc Gasol | +0.1                      |
| C        | Nikola Jokic | -1.0                       |
| SF        | Kawhi Leonard | +0.1                       |
| SF        | LeBron James | +1.1                      |
| SF       | Kevin Durant | -0.6                      |
| SF       | Giannis Antetokounmpo | -0.7                       |
| SF       | Paul George | -0.9                       |
| PF        | Serge Ibaka | -0.5                       |
| PF        | Pascal Siakam | -0.5                     |
| PF       | Blake Griffin | +0.3                      |
| PF       | LaMarcus Aldridge| -0.3                       |
| PF       | Kevin Love | -0.5                       |


###  Rebounds
|Position   |Name        | Rebounds (Predicted - Actual)|
| --------- | ---------- | -------------------------- |
| PG        | Kyle Lowry | +0.8                       |
| PG        | Steph Curry | -0.4                       |
| PG        | Kyrie Irving | -1.2                       |
| PG        | Russel Westbrook | -0.3                      |
| PG        | Damian Lillard | +0.2                       |
| SG        | Danny Green | -0.5                       |
| SG        | Demar Derozan | -1.7                     |
| SG        | Klay Thompson | 0                     |
| SG        | James Harden | -0.3                       |
| SG        | Jimmy Butler | -0.1                       |
| C        | Jonas Valunciunas | +0.4                       |
| C        | Anthony Davis | -0.4                      |
| C        | Joel Embiid | -3.0                      |
| C        | Marc Gasol | -0.1                       |
| C        | Nikola Jokic | +0.3                       |
| SF        | Kawhi Leonard | -1.3                       |
| SF        | LeBron James | +0.4                     |
| SF       | Kevin Durant | +0.8                      |
| SF       | Giannis Antetokounmpo | -2.4                       |
| SF       | Paul George | -2.3                       |
| PF        | Serge Ibaka | -1.6                       |
| PF        | Pascal Siakam | -2.5                      |
| PF       | Blake Griffin | +0.1                      |
| PF       | LaMarcus Aldridge| -1.0                       |
| PF       | Kevin Love | -0.9                       |

// export class TennisGame {
//     score: string = '';
//
//     getScore(player1Name: string,
//              player2Name: string,
//              m_score1: number,
//              m_score2: number) {
//         let tempScore = 0;
//
//         if (m_score1 == m_score2) {
//             switch (m_score1) {
//                 case 0:
//                     this.score = "Love-All";
//                     break;
//                 case 1:
//                     this.score = "Fifteen-All";
//                     break;
//                 case 2:
//                     this.score = "Thirty-All";
//                     break;
//                 case 3:
//                     this.score = "Forty-All";
//                     break;
//                 default:
//                     this.score = "Deuce";
//                     break;
//
//             }
//         } else if (m_score1 >= 4 || m_score2 >= 4) {
//             let minusResult = m_score1 - m_score2;
//             if (minusResult == 1) this.score = "Advantage player1";
//             else if (minusResult == -1) this.score = "Advantage player2";
//             else if (minusResult >= 2) this.score = "Win for player1";
//             else this.score = "Win for player2";
//         } else {
//             for (let i = 1; i < 3; i++) {
//                 if (i == 1) tempScore = m_score1;
//                 else {
//                     this.score += "-";
//                     tempScore = m_score2;
//                 }
//                 switch (tempScore) {
//                     case 0:
//                         this.score += "Love";
//                         break;
//                     case 1:
//                         this.score += "Fifteen";
//                         break;
//                     case 2:
//                         this.score += "Thirty";
//                         break;
//                     case 3:
//                         this.score += "Forty";
//                         break;
//                 }
//             }
//         }
//     }
// }
export class TennisGame {
    score: string = '';

    private readonly LOVE_SCORE = 0;
    private readonly FIFTEEN_SCORE = 1;
    private readonly THIRTY_SCORE = 2;
    private readonly FORTY_SCORE = 3;
    private readonly ADVANTAGE_DIFFERENCE = 1;
    private readonly WIN_DIFFERENCE = 2;

    public getScore(player1Name: string, player2Name: string, player1Score: number, player2Score: number): string {
        let tempScore: number = 0;

        if (player1Score === player2Score) {
            switch (player1Score) {
                case this.LOVE_SCORE:
                    this.score = 'Love-All';
                    break;
                case this.FIFTEEN_SCORE:
                    this.score = 'Fifteen-All';
                    break;
                case this.THIRTY_SCORE:
                    this.score = 'Thirty-All';
                    break;
                case this.FORTY_SCORE:
                    this.score = 'Forty-All';
                    break;
                default:
                    this.score = 'Deuce';
                    break;
            }
        } else if (player1Score >= 4 || player2Score >= 4) {
            const scoreDifference: number = player1Score - player2Score;
            if (scoreDifference === this.ADVANTAGE_DIFFERENCE) {
                this.score = `Advantage ${player1Name}`;
            } else if (scoreDifference === -this.ADVANTAGE_DIFFERENCE) {
                this.score = `Advantage ${player2Name}`;
            } else if (scoreDifference >= this.WIN_DIFFERENCE) {
                this.score = `Win for ${player1Name}`;
            } else {
                this.score = `Win for ${player2Name}`;
            }
        } else {
            for (let i: number = 1; i < 3; i++) {
                if (i === 1) {
                    tempScore = player1Score;
                } else {
                    this.score += '-';
                    tempScore = player2Score;
                }
                switch (tempScore) {
                    case this.LOVE_SCORE:
                        this.score += 'Love';
                        break;
                    case this.FIFTEEN_SCORE:
                        this.score += 'Fifteen';
                        break;
                    case this.THIRTY_SCORE:
                        this.score += 'Thirty';
                        break;
                    case this.FORTY_SCORE:
                        this.score += 'Forty';
                        break;
                }
            }
        }

        return this.score;
    }
}

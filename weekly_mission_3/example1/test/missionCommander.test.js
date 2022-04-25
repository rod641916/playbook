const MissionCommandder = require('./../app/missionCommander');

describe("Unit test for mission commander class", () => {
    test('1) Create a mission commander object', () => {
      const myMissionCommander=new MissionCommandder("Woopa") 
      expect(myMissionCommander.name).toBe("Woopa");
    });
  })
  
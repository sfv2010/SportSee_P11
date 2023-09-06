class UserData {
    constructor(apiResponse) {
        this.id = apiResponse.data.id;
        this.firstName = apiResponse.data.userInfos.firstName;
        this.todayScore =
            apiResponse.data.todayScore * 100 || apiResponse.data.score * 100;
        this.keyData = {
            calorieCount: apiResponse.data.keyData.calorieCount,
            proteinCount: apiResponse.data.keyData.proteinCount,
            carbohydrateCount: apiResponse.data.keyData.carbohydrateCount,
            lipidCount: apiResponse.data.keyData.lipidCount,
        };
    }
}

class UserActivity {
    constructor(apiResponse) {
        this.userId = apiResponse.data.userId;
        this.sessions = apiResponse.data.sessions;
        this.sessionsIndex = this.sessions.map((session, index) => ({
            ...session,
            index: index + 1, //start index from 1
        }));
    }
}

class UserAverage {
    constructor(apiResponse) {
        this.userId = apiResponse.data.userId;
        this.sessions = apiResponse.data.sessions;
    }
    getDayInitial(dayValue) {
        const dayOfWeekInitials = ["L", "M", "M", "J", "V", "S", "D"];
        const dayIndex = dayValue - 1;
        return dayOfWeekInitials[dayIndex];
    }
}

class UserPerformance {
    constructor(apiResponse) {
        this.userId = apiResponse.data.userId;

        this.kindTranslateInFr = {
            1: "Cardio",
            2: "Énergie",
            3: "Endurance",
            4: "Force",
            5: "Vitesse",
            6: "Intensité",
        };
        this.data = apiResponse.data.data
            .map((item) => {
                return {
                    value: item.value,
                    kind: this.kindTranslateInFr[item.kind],
                };
            })
            .reverse();
    }
}

export { UserData, UserActivity, UserAverage, UserPerformance };

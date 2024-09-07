const cron = require("node-cron");
const prisma = require("../lib/prisma");

cron.schedule("0 0 * * *", async () => {
  try {
    const timeLimit = new Date(Date.now() - 24 * 60 * 60 * 1000); // 24 hours ago
    await prisma.user.deleteMany({
      where: {
        createdAt: {
          lt: timeLimit,
        },
        otpVerified: false,
      },
    });
    console.log("Cleanup completed: Deleted unverified users.");
  } catch (error) {
    console.error("Error during cleanup:", error);
  }
});

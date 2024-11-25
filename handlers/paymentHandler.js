async function handlePayment(ctx, amount) {
  try {
    // Add your payment processing logic here
    // await ctx.editMessageText(`Processing payment for $${amount}...`);
    await ctx.editMessageText(`Premium payments are coming soon.`);

    //sol address
    const message = `
    Send Exactly ${amount} to this solana address
    `;

    // Integrate with your payment provider
  } catch (error) {
    console.log(error);
    await ctx.reply("Payment processing failed. Please try again.");
  }
}

module.exports = { handlePayment };

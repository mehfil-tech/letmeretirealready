async function signInWithOtp({ phoneNumber }: { phoneNumber: string }) {
  return await supabase.auth.signInWithOtp({
    phone: phoneNumber,
  });
}

export default signInWithOtp;

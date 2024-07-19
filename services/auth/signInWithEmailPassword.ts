
const signInWithEmailPassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
};

export default signInWithEmailPassword;

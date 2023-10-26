export const fetchUsersData = async () => {
   try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Failed to fetch user');
      return await response.json();
   } catch(error) {
      console.error(error.message);
      throw error;
   }
}
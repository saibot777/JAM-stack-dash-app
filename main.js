const listRepos = async username => {
  try {
    let repos = await fetch(
      `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
    );
    repos = repos.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

try {
    const response = await fetch(
      'https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-mt-web-ft/players'
    );
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }

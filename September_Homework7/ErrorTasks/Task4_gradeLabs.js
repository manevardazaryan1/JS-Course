function gradeLabs(labs) {
    const results = [];
    let result;

    for (const lab of labs) {
      const {student, runLab} = {...lab}

      try {
        result = runLab(5); 
      } catch (error) {
        result = "Error thrown";
      }
  
      results.push(`${student}: ${result}`);
    }

    return results;
}
  
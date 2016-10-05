export function CheckDependency(depName: string, dep: any) {
  return (target) => {
    if (typeof dep == 'undefined') {
      console.error(`Dependency ${depName} is undefined at decoration time!`);
    }
    return target;
  }
}

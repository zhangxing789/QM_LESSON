function greeter (person: string) :string {
    return "Hello," + person;
}

var user: string = "zx";
document.body.innerHTML = greeter (user);
# Python  CI/CD pipeline

Let's talk about a CI/CD pipeline workflow implementation for a Python project.

- **Linting:** We are gonna use *PyLint tool*, it's a widely tool that checks for errors in Python code and encourage good Python patterns

- **Testing**:  There several test runners available fpr Python, for our project we are gonna work with the one built into the Python standard library *unittest*, which requires that:

    - You put your test into classes as methods
    - You use a series of special assertion methods in the *unittest*. *TestCase* class instead of the built-in assert statement

- **Building**: For packging our Python project we are use a project struture that will look like this 
    ```python
    packaging_tutorial/
    ├── LICENSE
    ├── pyproject.toml
    ├── README.md
    ├── setup.cfg
    ├── src/
    │   └── example_package/
    │       ├── __init__.py
    │       └── example.py
    └── tests/
    ```
    *pyproject.toml* tells buid tools (like *pip* and *build*) what is required to build your project.

    *setup.cfg* is the configuration file for *setuptools*. It tells setuptools about your package (such as the name and version) as well as which code files to include.

- **GitLab CI/CD**:  allows you to create workflows that automatically build, test, publish, release, and deploy code.
    - Workflow configuration files are writtten in YAML and are stored in the code's repository
    - Workflows include one or more jobs
    - Jobs include one or more steps or indicidual commands
    - Jobs can run on either managed or self-hosted machines

- **Self-hosted vs Cloud-based**:  We are going to choose a cloud-based environment, based on the size of our project, a single small team of just 6 people indeed we dont have any special requirements. The configuration of our environment will be simple.
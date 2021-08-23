# Before you start contributing

## Asking for help

**If you need some help, at any time, you can talk in the [discord server](https://discord.gg/2vRqjpk247).**
You can also share your projects, thoughts, and suggestions there.

## Code quality

Before you start contributing, there are a few things to know :

- Please write easy to understand code. If you can't, try to explain it with comments.
- If some changes need to be done in subclasses, explain how and why.
  _For example, the copy method for mobject needs to be implemented for every subclass; otherwise, some properties may not be copied and Dart may not be ok with that._

## Checks

These checks automatically run with GitHub CI when a pull request is made.

- Analyse your code with `dart analyse` (looks for unused imports, variables, and more)
- Format your code with `dart format {file}` for every file you changed or `dart run tool/format_all.dart`
- Run the custom checks with `dart run tool/checks/run_all_checks.dart`

## Branches

When working on a feature, create a branch prefixed with `feature/`. Once the feature is ready, create a pull request.

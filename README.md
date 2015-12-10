# Angular 2 workshop (Gulp)

[Assignment 1](../../tree/assignment_1)

[Assignment 2](../../tree/assignment_2)

[Assignment 3](../../tree/assignment_3)

[Result + links](../../tree/result)


##Don't have npm?
Please get it...

Else replace imports and System script in index.html:
```
<script src="https://code.angularjs.org/tools/system.js"></script>
<script src="https://code.angularjs.org/tools/typescript.js"></script>
<script src="https://code.angularjs.org/2.0.0-alpha.47/angular2.dev.js"></script>
<script src="https://code.angularjs.org/2.0.0-alpha.47/http.dev.js"></script>
<script src="https://code.angularjs.org/2.0.0-alpha.47/router.dev.js"></script>
<script>
  System.config({
      transpiler: 'typescript',
      typescriptOptions: { emitDecoratorMetadata: true }
  });
  System.import('./app/app.ts');
</script>
```

Then run it in localhost.
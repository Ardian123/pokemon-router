# Pokemon router

Nothing special. Just regular `react-router` learning.

## First things first

This page was created only for learning `react-router`. There's no any fancy look of site, super content or whatever. I just wanted to get my hands dirty with mentioned plugin.

## Notes for future me

Main part of react-router lives in `App.js`

### Main part - App.js and configuration

```JSX
<div className="App">
    <RouterProvider router={router} />
</div>
```

Step 1:

```JSX
const router = createBrowserRouter( ... )
```

Step 2:

```JSX
const router = createBrowserRouter(
    createRoutesFromElements( ... )
)
```

Step 3:

```JSX
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            // Other Route elements inside.
            // It's possible to nest <Route> in another <Route>
            // It creates hierarchy
            // 👍
        </Route>
    )
)
```

### What's inside <Route> element

```JSX
<Route
    path="" // it's needed to create a path
    element={} // it's needed as an info what component should show. Example: `element={<Careers />`
    loader={} // Example: `loader={loaderCareers} for side effects
    index // instead of pat="/" - just to show which one page is as boss aka index aka homepage
    errorElement={} //If there's a dynamic path like path=":id" we can use `errorElement` to show other component if there's no `id`
>
    ...
</Route>
```

### Route with Layout component

```JSX
// App.js
<Route path="/" loader={<RootLayout />}>
    <Route path="" loader={<ContactPage />}></Route>
</Route>

// RootLayout.js
...
return (
    <header>
        ...
    </header>
    <main>
        <Outlet />
    </main>
)
```

### Loader param what it is about

```JSX
// App.js
<Route path="/careers" element={<Careers />} loader={careersLoader}></Route>

// Careers.js
const data = useLoaderData();

export const careersLoader = async () => {
    const res = await fetch('some-address-with-careers');
    return res.json();
}
```

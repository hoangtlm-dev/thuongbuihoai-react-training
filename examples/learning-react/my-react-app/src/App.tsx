import { useState } from "react"
import { ThemeProvider } from "./components/hooks/contextHooks/Context"
import { ClearUp, PreviewAvatar, Timer, UseLayoutEffect } from "./components/hooks/effectHooks/EffectHook"
import { ExampleUseMemo } from "./components/hooks/memoHooks/Memo"
import { RefHook } from "./components/hooks/refHooks/refHooks"
import Example, { Reducer } from "./components/hooks/stateHooks/StateHook"
import { Gift } from "./gift/Gift"
import { TodoApp } from "./todoApp/TodoApp"
import { TodoList } from "./todoList/Todo"

function App(): JSX.Element {
  return (
   <>
    <Example />
    <hr />
    <Timer />
    <hr />
    <ClearUp />
    <hr />
    <PreviewAvatar />
    <hr />
    <ThemeProvider />
    <hr />
    <RefHook />
    <hr />
    <UseLayoutEffect />
    <hr />
    <Reducer />
    <hr />
    <ExampleUseMemo />
    <hr />
    <TodoList />
    <hr />
    <TodoApp />
    <hr />
    <Gift />
   </>
  )
}

export default App

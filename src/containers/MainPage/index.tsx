import { Button, Card, TextInput } from "@/components/UI"
import { FC } from "react"

const MainPage:FC = () => {
  return (
    <section className="w-full max-w-[300px] md:max-w-[600px] inset-0 m-auto">
      <Card className="mt-12" hasLabel label="Add New Todo">
        <div className="flex justify-between items-center gap-2">
          <TextInput id="todoInput" hasLabel={false} />
          <Button label="Add" className="bg-sp-blue text-white" />
        </div>
      </Card>
    </section>
  )
}

export default MainPage
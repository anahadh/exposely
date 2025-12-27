import Button from '@/ui/Button/Button'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center p-20">
        <h1 className="text-4xl text-black font-title font-semibold"><span className="text-blue-500">there's bias?</span> <span className="text-red-500">try us.</span></h1>
        <p className="text-lg text-black font-body mt-2 w-3/4 text-center">exposely empowers you to find the truth in news stories and keep track of your own biases</p>
        <div className="flex items-center justify-center mt-2 gap-5">
          <Button color="primary" variant="solid">Start Finding Bias</Button>
          <Button color="primary" variant="outline">Log In</Button>
        </div>
      </div>
    </div>
  );
}

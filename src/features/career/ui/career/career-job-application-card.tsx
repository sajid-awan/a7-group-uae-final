import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, AtSign } from "lucide-react"

import { LinkedInBrandIcon } from "@/shared/ui/brand-icons"
import { Button } from "@/shared/ui/button"
import { FileUploadDropzone } from "@/shared/ui/file-upload-dropzone"
import { Field, FieldLabel } from "@/shared/ui/field"
import { Input } from "@/shared/ui/input"
import { Textarea } from "@/shared/ui/textarea"
import { careerPath } from "@/shared/lib/constants/routes"

type CareerJobApplicationCardProps = {
  manager: {
    name: string
    title: string
    avatarUrl: string
  }
}

export function CareerJobApplicationCard({ manager }: CareerJobApplicationCardProps) {
  return (
    <>
     <div className="rounded-md border border-border p-3 text-center">
        <Image
          src={manager.avatarUrl}
          alt={manager.name}
          width={48}
          height={48}
          className="mx-auto size-12 rounded-full object-cover"
        />
        <p className="mt-1.5 text-[10px] text-a7-text-gray">Reports to</p>
        <p className="text-xs font-semibold text-a7-black">{manager.name}</p>
        <p className="text-[10px] text-a7-text-gray">{manager.title}</p>
        <Button
          variant="outline"
          size="sm"
          shape="pill"
          iconRight={<AtSign className="size-4" />}
          className="mt-3 h-12 w-full border-black/35 bg-transparent text-sm font-semibold text-a7-black"
        >
          Apply with Email
        </Button>
        <Button
          variant="default"
          size="sm"
          shape="pill"
          iconRight={
            <span className="inline-flex size-4 items-center justify-center rounded-[3px] bg-white">
              <LinkedInBrandIcon className="size-3 text-[#0A66C2]" />
            </span>
          }
          className="mt-3 h-12 w-full bg-[#0A66C2] text-sm font-semibold text-white hover:bg-[#0A66C2]/90"
        >
          Apply with LinkedIn
        </Button>
      </div>
    <div className="rounded-md border border-border bg-white p-3.5 mt-3">
     

      <form className="mt-3 space-y-2">
        <Field orientation="vertical">
          <FieldLabel htmlFor="career-apply-name" className="text-[10px] font-medium text-a7-black">
            Name
          </FieldLabel>
          <Input id="career-apply-name" placeholder="Full Name" className="h-8 rounded-sm text-[11px]" />
        </Field>

        <Field orientation="vertical">
          <FieldLabel htmlFor="career-apply-email" className="text-[10px] font-medium text-a7-black">
            Email
          </FieldLabel>
          <Input id="career-apply-email" type="email" placeholder="Email" className="h-8 rounded-sm text-[11px]" />
        </Field>

        <Field orientation="vertical">
          <FieldLabel htmlFor="career-apply-phone" className="text-[10px] font-medium text-a7-black">
            Phone
          </FieldLabel>
          <Input id="career-apply-phone" type="tel" placeholder="Phone" className="h-8 rounded-sm text-[11px]" />
        </Field>

        <Field orientation="vertical">
          <FieldLabel htmlFor="career-apply-cv" className="text-[10px] font-medium text-a7-black">
            Upload CV
          </FieldLabel>
          <FileUploadDropzone
            name="career-apply-cv"
            variant="career"
            title="Click here"
            description="to upload or drop files here"
            accept=".pdf,.doc,.docx"
            multiple={false}
            className="rounded-md"
          />
        </Field>

        <Field orientation="vertical">
          <FieldLabel htmlFor="career-apply-docs" className="text-[10px] font-medium text-a7-black">
            Additional Documents
          </FieldLabel>
          <FileUploadDropzone
            name="career-apply-docs-upload"
            variant="career"
            title="Click here"
            description="to upload or drop files here"
            multiple
            className="rounded-md"
          />
          <Textarea id="career-apply-docs" placeholder="Add links or notes" className="min-h-14 rounded-sm text-[11px]" />
        </Field>

        <Button type="submit" variant="default" shape="pill" className="h-8 w-full text-[10px] font-semibold">
          Submit Application
        </Button>
      </form>

      <p className="mt-2 text-center text-[10px] text-a7-text-gray">
        Need help instead?{" "}
        <Link href={careerPath()} className="inline-flex items-center gap-0.5 text-a7-black hover:underline">
          Contact careers team
          <ArrowUpRight className="size-3" aria-hidden />
        </Link>
      </p>
    </div>
    </>
  )
}

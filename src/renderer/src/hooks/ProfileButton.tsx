import React from 'react'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import CloseIcon from '@mui/icons-material/Close'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import DownloadCv from '../components/DownloadCv'
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <button
        onClick={handleClickOpen}
        className="flex border-2 p-2 rounded-md bg-primary-blue text-white "
      >
        <VisibilityOutlinedIcon />
        <p className="pl-1 font-medium">Ver perfil</p>
      </button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="md"
      >
        <section className="flex justify-between px-4 pt-4 ">
          {/* sección del header */}
          <p className="text-xl font-semibold ">Perfil Docente</p>
          <button onClick={handleClose} className="opacity-60">
            <CloseIcon />
          </button>
        </section>

        <section className="p-10 flex gap-x-9">
          {/* Sección completa de la informacion */}
          <section className="flex flex-col gap-y-7 min-w-96">
            {/* Sección del nombre y datos basicos*/}
            <section className="flex">
              <div className="flex flex-col justify-center">
                <PersonOutlineOutlinedIcon sx={{ fontSize: 35 }} />
              </div>
              <article className="ml-2">
                <p className="text-xl font-bold">John Doe</p>
                <p className="text-sm opacity-80">Docente de Matematicas</p>
              </article>
            </section>
            <section className="flex flex-col gap-y-2 pt-2">
              <article className="flex justify-between">
                <p className="opacity-70">Experiencia:</p>
                <p className="font-semibold">5 años</p>
              </article>
              <article className="flex justify-between">
                <p className="opacity-70">Educación:</p>
                <p className="font-semibold">Ingeniero Electronico</p>
              </article>
              <article className="flex justify-between">
                <p className="opacity-70">Area:</p>
                <p className="font-semibold">Matematica, Fisica</p>
              </article>
              <article className="flex justify-between">
                <p className="opacity-70">Certificaciones:</p>
                <p className="font-semibold">Docente Universitario</p>
              </article>
            </section>
            <section className="mx-auto mt-6">
              <DownloadCv style="flex border-2 p-2 rounded-md bg-primary-blue text-white" />
            </section>
          </section>
          <section className="flex flex-col gap-y-2">
            {/* Sección de información detallada del docente */}
            <article>
              <p className="font-bold text-xl pb-1">Sobre</p>
              <p className="opacity-70 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto saepe alias fugit
                suscipit unde aperiam nostrum, architecto sint officiis cum nam similique
                repellendus, rem ipsum maiores illum excepturi? Alias, ea.
              </p>
            </article>
            <article>
              <p className="font-bold text-xl pb-1">Experiencia</p>
              <ul className="opacity-70 list-disc pl-8">
                <li>Profesor de Matematicas - Instituto XYZ (Enero 2015 - Actualidad)</li>
                <li>Profesor de Matematicas - Instituto ABC (Agosto 2010 - Diciembre 2014)</li>
              </ul>
            </article>
            <article>
              <p className="font-bold text-xl pb-1">Educación</p>
              <ul className="opacity-70 list-disc pl-8">
                <li>
                  Licenciatura en MatemáticasUniversidad Nacional Autónoma de México (UNAM) 2006 -
                  2010
                </li>
              </ul>
            </article>
          </section>
        </section>
      </Dialog>
    </React.Fragment>
  )
}

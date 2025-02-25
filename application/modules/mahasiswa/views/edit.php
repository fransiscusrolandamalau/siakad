<div class="card-header">
    <div class="card-title">
        <h3 class="card-label"><?= $page_header; ?>
    </div>
    <div class="card-toolbar">
        <a href="<?= base_url('mahasiswa'); ?>" class="btn btn-light-primary font-weight-bolder mr-2">
        <i class="ki ki-long-arrow-back icon-sm"></i>Kembali</a>
    </div>
</div>
<div class="card-body">
	<?= form_open_multipart(''); ?>	
		<?= form_hidden('id', $mahasiswa->id); ?>
		<?= form_hidden('old_photo', $mahasiswa->photo); ?>
		<div class="row">
			<div class="col-xl-2"></div>
			<div class="col-xl-8">
				<div class="my-5">
					<div class="form-group row">
						<label class="col-3">NIM</label>
						<div class="col-9">
							<input type="text" class="form-control" name="nim" value="<?= $mahasiswa->nim; ?>" readonly >
							<span class="text-danger"><?= form_error('nim'); ?></span>
						</div>
					</div>
					<div class="form-group row">
						<label class="col-3">Nama Lengkap</label>
						<div class="col-9">
							<input type="text" class="form-control" name="nama_lengkap" value="<?= $mahasiswa->nama_lengkap; ?>">
							<span class="text-danger"><?= form_error('nama_lengkap'); ?></span>
						</div>
					</div>
					<div class="form-group row">
						<label class="col-3">Jenis Kelamin</label>
						<div class="col-9">
							<select class="form-control" name="jenis_kelamin" id="jenis_kelamin">
								<option value="Laki-laki" <?= $mahasiswa->jenis_kelamin == 'Laki-laki' ? 'selected' : '' ?>>Laki-laki</option>
								<option value="Perempuan" <?= $mahasiswa->jenis_kelamin == 'Perempuan' ? 'selected' : '' ?>>Perempuan</option>
							</select>
							<span class="text-danger"><?= form_error('jenis_kelamin'); ?></span>
						</div>
					</div>
					<div class="form-group row">
						<label class="col-3">Email</label>
						<div class="col-9">
							<input type="email" class="form-control" name="email" value="<?= $mahasiswa->email; ?>">
							<span class="text-danger"><?= form_error('email'); ?></span>
						</div>
					</div>
					<div class="form-group row">
						<label class="col-3">No.Telepon</label>
						<div class="col-9">
							<input type="number" class="form-control" name="telepon" value="<?= $mahasiswa->telepon; ?>">
							<span class="text-danger"><?= form_error('telepon'); ?></span>
						</div>
					</div>
					<div class="form-group row">
						<label class="col-3">Alamat</label>
						<div class="col-9">
							<textarea class="form-control" name="alamat" id="alamat" cols="30" rows="10"><?= $mahasiswa->alamat; ?></textarea>
							<span class="text-danger"><?= form_error('alamat'); ?></span>
						</div>
					</div>
					<div class="form-group row">
						<label class="col-3">Tempat Lahir</label>
						<div class="col-9">
							<input type="text" class="form-control" name="tempat_lahir" value="<?= $mahasiswa->tempat_lahir; ?>">
							<span class="text-danger"><?= form_error('tempat_lahir'); ?></span>
						</div>
					</div>
					<div class="form-group row">
						<label class="col-3">Tanggal Lahir</label>
						<div class="col-9">
							<div class="input-group date">
								<input name="tanggal_lahir" type="text" class="form-control datepicker" data-date-format="yyyy-mm-dd" value="<?= $mahasiswa->tanggal_lahir; ?>" autocomplete="off"/>
							</div>
							<span class="text-danger"><?= form_error('tanggal_lahir'); ?></span>
						</div>
					</div>
					<div class="form-group row">
						<label class="col-3">Nama Prodi</label>
						<div class="col-9">
							<select name="nama_prodi" class="form-control" id="kt_select2_1" data-placeholder="--Pilih Prodi">
								<?php foreach ($program_studi as $prodi) : ?>
									<option value="<?= $prodi['kode_prodi'] ;?>"
										<?php if ($prodi['kode_prodi'] == ($mahasiswa->nama_prodi)): ?>
											selected
										<?php endif; ?>
									><?= $prodi['nama_prodi'] ;?></option>
								<?php endforeach; ?>
							</select>
							<span class="text-danger"><?= form_error('nama_prodi'); ?></span>
						</div>
					</div>
					<div class="form-group row">
						<label class="col-3">Foto</label>
						<div class="col-9">
							<div class="image-input image-input-outline" id="kt_image_4"">
								<div class="image-input-wrapper" style="background-image: url(<?= base_url('resources/admin/images/upload/mahasiswa/').$mahasiswa->photo; ?>)"></div>
								<label class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="change" data-toggle="tooltip" title="" data-original-title="Change Photo">
									<i class="fa fa-pen icon-sm text-muted"></i>
									<input type="file" name="photo"/>
								</label>
							</div>
						</div>
					</div>
					<div class="form-group row">
						<label class="col-3">Status Mahasiswa</label>
						<div class="col-9">
							<select class="form-control" name="status_mahasiswa" id="status_mahasiswa">
								<option value="0" <?= $mahasiswa->status_mahasiswa == '0' ? 'selected' : '' ?>>Belum Lulus</option>
								<option value="1" <?= $mahasiswa->status_mahasiswa == '1' ? 'selected' : '' ?>>Lulus</option>
							</select>
							<span class="text-danger"><?= form_error('status_mahasiswa'); ?></span>
						</div>
					</div>
					<input type="submit" class="btn btn-primary btn-block" value="Simpan">
				</div>
			</div>
		</div>
	<?= form_close(); ?>
</div>
